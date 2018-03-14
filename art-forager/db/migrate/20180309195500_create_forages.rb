class CreateForages < ActiveRecord::Migration[5.1]
  def change
    create_table :forages do |t|
      t.string :forage_level
      t.string :orgs_code
      # t.bigint :organizer_id

      t.timestamps
      t.belongs_to :organizer, index: true
    end
    # add_index :forages, :forage_level
    # add_index :forages, :orgs_code
    # add_index :forages, :organizer_id
  end
end
