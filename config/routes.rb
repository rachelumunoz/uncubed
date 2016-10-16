Rails.application.routes.draw do
  root 'galleries#index'
  devise_for :users
 
  resources :galleries, only: [:new, :create, :index, :show] do
      resources :comments, only: [:index, :new, :create]
    end

  
  resources :users, only: [:show, :edit, :update]
end
