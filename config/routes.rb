Rails.application.routes.draw do
  root 'galleries#index'
  devise_for :users
 
  resources :galleries, only: [:new, :create, :index, :show] do
      member do
        get "like", to: "galleries#upvote"
        get "dislike", to: "galleries#downvote"
      end
      resources :comments, only: [:index, :new, :create]
      resources :exhibitions, only: [:new, :create, :index] do
        member do
          get "like", to: "exhibitions#upvote"
          get "dislike", to: "exhibitions#downvote"
        end
      end
    end

  
  resources :users, only: [:show, :edit, :update]
end
