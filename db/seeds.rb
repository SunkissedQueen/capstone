# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Movie.destroy_all 
MovieList.destroy_all 
List.destroy_all 

# 5.times do
#     User.create([{username: Faker::Name.unique.name, email: Faker::Internet.unique.email, password: Faker::Internet.password}])
#     end
5.times do
    username = Faker::Name.unique.name
    email = Faker::Internet.unique.email
    password = Faker::Internet.password
    User.create(username: username, email: email, password: password)
end

# first_user = User.first

# first_list = List.create(list_name: 'first list', user_id: first_user.id)

# first_movie = Movie.create(title: '456 Street', show_type: 'movie', network: ['hulu'], genre: ['Horror','Foreign'], us_rating: 'R', year: 2021)

# second_movie = Movie.create(title: 'Jumanji', show_type: 'movie', network: ['Netflix', 'Disney'], genre: ['Adventure', 'Comedy'], us_rating: 'PG-13', year: 2019)

# MovieList.create(list: first_list, movie: first_movie)