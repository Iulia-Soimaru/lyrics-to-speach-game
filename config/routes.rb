Rails.application.routes.draw do
  root "application#index"
  get 'sessions/destroy'
  get 'sessions/create'


  match '/auth/:provider/callback', to: 'sessions#create', via: [:get, :post]
  match '/auth/failure', to: redirect('/'), via: [:get, :post]
  match '/signout', to: 'sessions#destroy', as: 'signout', via: [:get, :post]

  # get 'auth/:provider/callback' => 'sessions#create'
  # get 'auth/failure' => redirect('/')
  # get 'signout' => 'sessions#destroy', as: 'signout'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
