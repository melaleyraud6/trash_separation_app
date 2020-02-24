Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root   to: 'trashes#index'
  # resources :searches, only: [:index]
  resources :trashes, only: [:index, :show, ] do
    collection do
      get 'search'
    end
  end 
end
