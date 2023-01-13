class Api::V1::WeathersController < ApplicationController

  protect_from_forgery with: :null_session
  def create
    render json: params

  end

  def read
  end

  def update
  end

  def destroy
  end
end
