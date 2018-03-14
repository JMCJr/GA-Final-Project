class CreateOrganizers < ActiveRecord::Migration[5.1]
  def change
    create_table :organizers do |t|
      t.string :email
      t.string :password_digest

      t.timestamps
    end
    add_index :organizers, :email
    add_index :organizers, :password_digest
  end
end
