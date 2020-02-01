class LoginsController < ApplicationController
  def new
  end

  def create
    if user = authenticate_with_google
      # session[:user_id] = user.id
      redirect_to login_url
    else
      redirect_to login_url, alert: 'authentication_failed'
    end
  end

  private

  def authenticate_with_google
    if id_token = flash[:google_sign_in_token]
      GoogleSignIn::Identity.new(id_token).user_id
    end
  end
end
