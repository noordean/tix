Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'login', to: 'logins#new'
  get 'login/create', to: 'logins#create', as: :create_login
end
