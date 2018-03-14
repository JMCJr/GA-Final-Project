class AnswersController < ApplicationController
  def index
    answer = Answer.all
    render json: answer
  end

  def show
    answer = Answer.find(params[:id])
    render json: answer
  end

  def create
    answer = Answer.create!(answer_params)
      # answer: answer,
      # correct: correct,
      # forage_id: forage_id
    render json: answer
  end

  def update
    answer = Answer.find(params[:id])
    answer = Answer.update!(answer_params)
  end

  def destroy
    answer = Answer.find(params[:id])
    answer = destroy!
    render plain: "This Answer Is No More"
  end

  private

  def answer_params
    params.permit(:answer, :correct, :forage_id, :answer_id)
  end
end
