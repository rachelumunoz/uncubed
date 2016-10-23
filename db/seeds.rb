# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: "rach", email: "r@r.com", password: "password")
user2 = User.create!(username: "ash", email: "a@a.com", password: "password")
user3 = User.create!(username: "geo", email: "g@g.com", password: "password")

gallery_1 = Gallery.create!(name: "M + B", address: "612 North Almont Drive", image: File.new("./public/m_b.jpg"))

gallery_1.liked_by user1
gallery_1.liked_by user2
gallery_1.liked_by user3
gallery_1.save

gallery_1_review_1 = Comment.create!(content: "I look forward to their shows. Thoughtfully curated, and they have a great line up of artists.", commentable_id: 1, commentable_type: "Gallery", user_id: 1)

gallery_2 = Gallery.create!(name: "Various Small Fires", address: "812 Highland Ave", image: File.new("./public/vsf.jpg"))
gallery_2.liked_by user1
gallery_2.save

gallery_3 = Gallery.create!(name: "Susanne Vielmetter", address: "6006 Washington Blvd", image: File.new("./public/sus_viel.jpg"))


gallery_3.liked_by user1
gallery_3.liked_by user2
gallery_3.save


# gallery_1 
exhibition1 = Exhibition.create!(title: "Jessica Eaton Solo Show", artist: "Jessica Eaton", date_begin: Date.new(2016, 9, 24), date_end: Date.new(2016, 11, 12), gallery_id: 1)


# gallery_2 
exhibition2 = Exhibition.create!(title: "Relics of the Epoch", artist: "Jeff Ziln", date_begin: Date.new(2016, 9, 17), date_end: Date.new(2016, 10, 22), gallery_id: 2)

