const db = require("@/config/database");
const {
  errorServerResponse,
  successResponse,
  errorClientResponse,
} = require("@/helpers/response.helper");

const getBanner = async (req, res) => {
  try {
    const query = `SELECT banner_name, banner_image, description FROM banners`;
    let [banner] = await db.query(query);
    return successResponse(res, 0, "Sukses", banner);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const getService = async (req, res) => {
  try {
    const query = `SELECT service_code, service_name, service_icon, service_tariff FROM services`;
    let [service] = await db.query(query);
    return successResponse(res, 0, "Sukses", service);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

module.exports = {
  getBanner,
  getService,
};
