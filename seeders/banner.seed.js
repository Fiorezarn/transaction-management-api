const banners = [
  {
    banner_name: "Banner 1",
    banner_image: "https://nutech-integrasi.app/dummy.jpg",
    description: "Lerem Ipsum Dolor sit amet",
  },
  {
    banner_name: "Banner 2",
    banner_image: "https://nutech-integrasi.app/dummy.jpg",
    description: "Lerem Ipsum Dolor sit amet",
  },
  {
    banner_name: "Banner 3",
    banner_image: "https://nutech-integrasi.app/dummy.jpg",
    description: "Lerem Ipsum Dolor sit amet",
  },
  {
    banner_name: "Banner 4",
    banner_image: "https://nutech-integrasi.app/dummy.jpg",
    description: "Lerem Ipsum Dolor sit amet",
  },
  {
    banner_name: "Banner 5",
    banner_image: "https://nutech-integrasi.app/dummy.jpg",
    description: "Lerem Ipsum Dolor sit amet",
  },
  {
    banner_name: "Banner 6",
    banner_image: "https://nutech-integrasi.app/dummy.jpg",
    description: "Lerem Ipsum Dolor sit amet",
  },
];

module.exports = {
  up: async (db) => {
    const query = `
      INSERT INTO banners (banner_name, banner_image, description)
      VALUES (?, ?, ?)
    `;
    for (const banner of banners) {
      await db.execute(query, [
        banner.banner_name,
        banner.banner_image,
        banner.description,
      ]);
    }
    console.log("Banner seeder berhasil dijalankan.");
  },
  down: async (db) => {
    await db.execute(`DELETE FROM banners`);
    console.log("Banner seeder berhasil di-rollback.");
  },
};
