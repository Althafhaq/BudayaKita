class BudayakitaDbSource {
  static async homeBudaya() {
    const response = await fetch('DATA.json');
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.budayas;
  }

  static async homeDestinasi() {
    const response = await fetch('DATA.json');
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.destinasis;
  }
}

export default BudayakitaDbSource;
