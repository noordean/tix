class ApplicationController < ActionController::Base
  def current_user
    User.find_by(google_id: session[:user_id]) if session[:user_id]
  end

  def redirect_logged_in_user!
    redirect_to events_url if current_user.present?
  end

  def redirect_unauthorized_user!
    redirect_to root_url if current_user.nil?
  end
end
