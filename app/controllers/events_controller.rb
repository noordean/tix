class EventsController < ApplicationController
  before_action :redirect_unauthorized_user!
  before_action :load_event, only: %i[ destroy update ]
  before_action :extract_date_info, only: %i[ create update ]

  def index
    respond_to do |format|
      format.html do
        @current_user = current_user
      end

      format.json do
        events = current_user.events
        render json: events
      end
    end
  end

  def create
    event = Event.new(event_params)
    event.starts_at = @starts_at
    event.ends_at = @ends_at
    event.user_id = current_user.id

    if event.save
      head :ok
    else
      head :unprocessable_entity
    end
  end

  def destroy
    event = @event.destroy
    if event.destroyed?
      head :ok
    else
      head :unprocessable_entity
    end
  end

  def update
    update_params = event_params.merge(starts_at: @starts_at, ends_at: @ends_at)
    if @event.update(update_params)
      head :ok
    else
      head :unprocessable_entity
    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :description, :address, :contact_info)
  end

  def load_event
    @event = Event.find(params[:id])
  end

  def extract_date_info
    start_date = params.dig(:event, :start_date)
    start_time = params.dig(:event, :start_time)
    end_date = params.dig(:event, :end_date)
    end_time = params.dig(:event, :end_time)
    @starts_at = Time.parse("#{start_date} #{start_time}")
    @ends_at = Time.parse("#{end_date} #{end_time}")
  end
end
