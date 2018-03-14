Rails.application.routes.draw do
  resources :organizers
  resources :forages
  resources :answers
  resources :smallclues
  resources :mediumclues
  resources :largeclues

  get 'isLoggedIn', :to => 'organizers#is_logged_in'
  post 'organizers/login', :to => 'organizers#login'
  get "forages/:id/answers", to: 'forages#answers_by_forage'
  get "organizers/forages", to: 'organizers#forages_by_organizer'
end
