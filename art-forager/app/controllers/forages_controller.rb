class ForagesController < ApplicationController
  def index
    forage = Forage.all
    render json: forage
  end

  def show
    forage = Forage.find(params[:id])
    render json: forage
  end

  def create
    forage = Forage.create!(forage_params)
    render json: forage
  end

  def update
    forage = Forage.find(params[:id])
    forage = Forage.update!(forage_params)
  end

  def destroy
    forage = Forage.find(params[:id])
    forage = destroy!
    render plain: "This Forage Is No More"
  end

  def answers_by_forage
    forage = Forage.find(params[:id])
    render json: forage.answers
  end

  private

  def forage_params
    params.require(:forage).permit(:forage_level, :orgs_code, :organizer_id, :forage_id)
  end
end
