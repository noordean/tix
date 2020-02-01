class LoginsController < ApplicationController
  def new
  end

  def create
    if user = authenticate_with_google
      # session[:user_id] = user.id
      redirect_to events_url
    else
      redirect_to login_url, alert: 'authentication_failed'
    end
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
