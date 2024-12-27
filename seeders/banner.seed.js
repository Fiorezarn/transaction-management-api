const db = require("../config/database");

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

(async () => {
  try {
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

    console.log("Seeder berhasil dijalankan!");
  } catch (error) {
    console.error("Seeder gagal:", error.message);
  } finally {
    await db.end();
  }
})();
