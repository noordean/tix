class EventsController < ApplicationController
  before_action :redirect_unauthorized_user!
  before_action :load_event, only: %i[ destroy ]

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
    start_date = params.dig(:event, :start_date)
    start_time = params.dig(:event, :start_time)
    end_date = params.dig(:event, :end_date)
    end_time = params.dig(:event, :end_time)
    event = Event.new(event_params)
    event.starts_at = Time.parse("#{start_date} #{start_time}")
    event.ends_at = Time.parse("#{end_date} #{end_time}")
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

  private

  def event_params
    params.require(:event).permit(:name, :description, :address, :contact_info)
  end

  def load_event
    @event = Event.find(params[:id])
  end
end
