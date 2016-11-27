Rails.application.routes.draw do
  root 'dashboard#index'
  
  devise_for :users
  
  resources :users, only: [:show, :edit, :update]
 
  concern :commentable do
    resources :comments, only: [:create, :index, :new, :show] do 
      member do
        post "like", to: "comments#upvote"
        post "dislike", to: "comments#downvote"
      end
    end
  end

  resources :galleries, only: [:new, :create, :index, :show, :update], shallow: true do
      member do
        # get "like", to: "galleries#upvote"
        # get "dislike", to: "galleries#downvote"
        patch "add_tags", to: "galleries#add_tags"
        patch "add_images", to: "galleries#add_images"
      end
      # concerns :commentable
      
    #   resources :exhibitions, only: [:new, :create, :show, :index] do
    #     member do
    #       get "like", to: "exhibitions#upvote"
    #       get "dislike", to: "exhibitions#downvote"
    #     end
    #     concerns :commentable 
    # end
  end

  #what about page rerendering for upvote/downvote, should ajax?

  namespace :api, constraints: {format: :json} do
    namespace :v1 do
      resources :galleries, only: [:new, :index, :create], shallow: true do
        resources :images, only: [:create, :destroy]
        member do
          post "like", to: "galleries#upvote"
          post "dislike", to: "galleries#downvote"
        end
        concerns :commentable
        resources :exhibitions, only: [:new, :create, :show, :index] 
      end
    end
  end
end
