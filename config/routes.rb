Rails.application.routes.draw do
  root 'galleries#index'
  devise_for :users
  resources :users, only: [:show, :edit, :update]
 
  concern :commentable do
    resources :comments, only: [:create, :index, :new, :show]
  end

  resources :galleries, only: [:new, :create, :index, :show], shallow: true do
      member do
        get "like", to: "galleries#upvote"
        get "dislike", to: "galleries#downvote"
        patch "add_tags", to: "galleries#add_tags"
      end
      concerns :commentable
      resources :exhibitions, only: [:new, :create, :show, :index] do
        member do
          get "like", to: "exhibitions#upvote"
          get "dislike", to: "exhibitions#downvote"
        end
        concerns :commentable 
    end
  end
    
  namespace :api, constraints: {format: :json} do
    namespace :v1 do
      resources :galleries, only: :index
    end
  end
end
