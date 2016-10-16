Rails.application.routes.draw do
  resources :galleries, only: [:new, :create]
  root 'galleries#index'
end
