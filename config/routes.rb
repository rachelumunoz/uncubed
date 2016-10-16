Rails.application.routes.draw do
  devise_for :users
  resources :galleries, only: [:new, :create]
  root 'galleries#index'
end
