const db = require("@/config/database");
const {
  errorServerResponse,
  successResponse,
  errorClientResponse,
} = require("@/helpers/response.helper");

const getBanner = async (req, res) => {
  try {
    const [banner] = await db.query(
      `SELECT banner_name, banner_image, description FROM banners`
    );
    return successResponse(res, 0, "Sukses", banner);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const getService = async (req, res) => {
  try {
    let [service] = await db.query(
      `SELECT service_code, service_name, service_icon, service_tariff FROM services`
    );
    return successResponse(res, 0, "Sukses", service);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

module.exports = {
  getBanner,
  getService,
};
