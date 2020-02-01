class LoginsController < ApplicationController
  before_action :redirect_logged_in_user!, only: %i[ new ]

  def new
  end

  def create
    if user = authenticate_with_google
      session[:user_id] = user.google_id
      redirect_to events_url
    else
      redirect_to root_url, alert: 'authentication_failed'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end

  private

  def authenticate_with_google
    if id_token = flash[:google_sign_in_token]
      google_token = GoogleSignIn::Identity.new(id_token)
      user = User.find_by(google_id: google_token.user_id)
      return user if user.present?

      User.create(name: google_token.name, google_id: google_token.user_id)
    end
  end
end
