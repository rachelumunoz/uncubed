Rails.application.routes.draw do
  root 'galleries#index'
  devise_for :users
 
  concern :commentable do
    resources :comments, only: [:create, :index, :new, :show]
  end

  resources :galleries, only: [:new, :create, :index, :show], shallow: true do
      member do
        get "like", to: "galleries#upvote"
        get "dislike", to: "galleries#downvote"
      end
      concerns :commentable
      resources :exhibitions, only: [:new, :create, :index, :show] do
        member do
          get "like", to: "exhibitions#upvote"
          get "dislike", to: "exhibitions#downvote"
        end
        concerns :commentable 
    end
  end
  
  resources :users, only: [:show, :edit, :update]
end
