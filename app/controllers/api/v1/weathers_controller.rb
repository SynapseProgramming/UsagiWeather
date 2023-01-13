class Api::V1::WeathersController < ApplicationController

  protect_from_forgery with: :null_session
  def create
    # render json: params_check
    Weather.create!(params_check)

  end

  def read
    @all_data = Weather.all
    render json: @all_data
  end

  def update
  end

  def destroy
  end

  def params_check
    params.permit(:temp, :press, :alt, :humid )
  end

end
