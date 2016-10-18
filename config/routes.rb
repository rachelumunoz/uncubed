Rails.application.routes.draw do
  root 'galleries#index'
  devise_for :users
 
  resources :galleries, only: [:new, :create, :index, :show] do
      member do
        get "like", to: "galleries#upvote"
        get "dislike", to: "galleries#downvote"
      end
      resources :comments, only: [:index, :new, :create]
      resources :exhibitions, only: [:new, :create]
    end

  
  resources :users, only: [:show, :edit, :update]
end
