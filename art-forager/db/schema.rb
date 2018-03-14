# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180311202042) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.string "answer"
    t.string "correct"
    t.bigint "forage_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["answer"], name: "index_answers_on_answer"
    t.index ["correct"], name: "index_answers_on_correct"
    t.index ["forage_id"], name: "index_answers_on_forage_id"
  end

  create_table "clues", force: :cascade do |t|
    t.text "clue_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["clue_text"], name: "index_clues_on_clue_text"
  end

  create_table "forages", force: :cascade do |t|
    t.string "forage_level"
    t.string "orgs_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "organizer_id"
    t.index ["organizer_id"], name: "index_forages_on_organizer_id"
  end

  create_table "largeclues", force: :cascade do |t|
    t.text "clue_text"
    t.string "clue_answer"
    t.string "clue_image_url"
    t.string "clue_gallery"
    t.string "forage_level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["clue_answer"], name: "index_largeclues_on_clue_answer"
    t.index ["clue_gallery"], name: "index_largeclues_on_clue_gallery"
    t.index ["clue_image_url"], name: "index_largeclues_on_clue_image_url"
    t.index ["clue_text"], name: "index_largeclues_on_clue_text"
    t.index ["forage_level"], name: "index_largeclues_on_forage_level"
  end

  create_table "mediumclues", force: :cascade do |t|
    t.text "clue_text"
    t.string "clue_answer"
    t.string "clue_image_url"
    t.string "clue_gallery"
    t.string "forage_level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["clue_answer"], name: "index_mediumclues_on_clue_answer"
    t.index ["clue_gallery"], name: "index_mediumclues_on_clue_gallery"
    t.index ["clue_image_url"], name: "index_mediumclues_on_clue_image_url"
    t.index ["clue_text"], name: "index_mediumclues_on_clue_text"
    t.index ["forage_level"], name: "index_mediumclues_on_forage_level"
  end

  create_table "organizers", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_organizers_on_email"
    t.index ["password_digest"], name: "index_organizers_on_password_digest"
  end

  create_table "smallclues", force: :cascade do |t|
    t.text "clue_text"
    t.string "clue_answer"
    t.string "clue_image_url"
    t.string "clue_gallery"
    t.string "forage_level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["clue_answer"], name: "index_smallclues_on_clue_answer"
    t.index ["clue_gallery"], name: "index_smallclues_on_clue_gallery"
    t.index ["clue_image_url"], name: "index_smallclues_on_clue_image_url"
    t.index ["clue_text"], name: "index_smallclues_on_clue_text"
    t.index ["forage_level"], name: "index_smallclues_on_forage_level"
  end

end
