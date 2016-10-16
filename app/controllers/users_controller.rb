class UsersController < ApplicationController
  before_action: :authenticate_user!, only: [:edit, :update]
  before_action: :check_authorization, only: [:edit, :updat
  before_action :set_user

  def show
  end

  private
    def check_authorization
      unless current_user.id === params[:id]
        redirect_to root_url
      end
    end

    def set_user
      @user = current_user
    end

end