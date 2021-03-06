Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'logins#new'

  get 'login/create', to: 'logins#create', as: :create_login
  get 'logout', to: 'logins#destroy'

  resources :events, except: %i[ new edit ] do
    member do
      put "update_status"
    end
  end
end
