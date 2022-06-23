import API_ENDPOINT from '../globals/api-endpoint';

class BudayakitaDbSource {
  static async homeBudaya() {
    const myHeaders = new Headers();
    myHeaders.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnhra2Via2xybnJ0dWNtdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0Nzk0MzgsImV4cCI6MTk3MDA1NTQzOH0.A4erUMLfASeeRNEErvj6DnLuGMuLtFaQPD-xsmbr6lQ');
    myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnhra2Via2xybnJ0dWNtdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0Nzk0MzgsImV4cCI6MTk3MDA1NTQzOH0.A4erUMLfASeeRNEErvj6DnLuGMuLtFaQPD-xsmbr6lQ');
    myHeaders.append('Range', '0-3');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(API_ENDPOINT.BUDAYA, requestOptions);
    const responseJson = await response.json();
    return responseJson;
  }

  static async homeDestinasi() {
    const myHeaders = new Headers();
    myHeaders.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnhra2Via2xybnJ0dWNtdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0Nzk0MzgsImV4cCI6MTk3MDA1NTQzOH0.A4erUMLfASeeRNEErvj6DnLuGMuLtFaQPD-xsmbr6lQ');
    myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnhra2Via2xybnJ0dWNtdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0Nzk0MzgsImV4cCI6MTk3MDA1NTQzOH0.A4erUMLfASeeRNEErvj6DnLuGMuLtFaQPD-xsmbr6lQ');
    myHeaders.append('Range', '0-3');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(API_ENDPOINT.DESTINASI, requestOptions);
    const responseJson = await response.json();
    return responseJson;
  }

  static async budayaPage() {
    const myHeaders = new Headers();
    myHeaders.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnhra2Via2xybnJ0dWNtdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0Nzk0MzgsImV4cCI6MTk3MDA1NTQzOH0.A4erUMLfASeeRNEErvj6DnLuGMuLtFaQPD-xsmbr6lQ');
    myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnhra2Via2xybnJ0dWNtdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0Nzk0MzgsImV4cCI6MTk3MDA1NTQzOH0.A4erUMLfASeeRNEErvj6DnLuGMuLtFaQPD-xsmbr6lQ');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(API_ENDPOINT.BUDAYA, requestOptions);
    const responseJson = await response.json();
    return responseJson;
  }

  static async destinasiPage() {
    const myHeaders = new Headers();
    myHeaders.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnhra2Via2xybnJ0dWNtdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0Nzk0MzgsImV4cCI6MTk3MDA1NTQzOH0.A4erUMLfASeeRNEErvj6DnLuGMuLtFaQPD-xsmbr6lQ');
    myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnhra2Via2xybnJ0dWNtdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0Nzk0MzgsImV4cCI6MTk3MDA1NTQzOH0.A4erUMLfASeeRNEErvj6DnLuGMuLtFaQPD-xsmbr6lQ');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(API_ENDPOINT.DESTINASI, requestOptions);
    const responseJson = await response.json();
    return responseJson;
  }

  static async budayaDetail(id) {
    const myHeaders = new Headers();
    myHeaders.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnhra2Via2xybnJ0dWNtdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0Nzk0MzgsImV4cCI6MTk3MDA1NTQzOH0.A4erUMLfASeeRNEErvj6DnLuGMuLtFaQPD-xsmbr6lQ');
    myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnhra2Via2xybnJ0dWNtdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0Nzk0MzgsImV4cCI6MTk3MDA1NTQzOH0.A4erUMLfASeeRNEErvj6DnLuGMuLtFaQPD-xsmbr6lQ');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(API_ENDPOINT.DETAILBUDAYA(id), requestOptions);
    const responseJson = await response.json();
    return responseJson[0];
  }

  static async destinasiDetail(id) {
    const myHeaders = new Headers();
    myHeaders.append('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnhra2Via2xybnJ0dWNtdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0Nzk0MzgsImV4cCI6MTk3MDA1NTQzOH0.A4erUMLfASeeRNEErvj6DnLuGMuLtFaQPD-xsmbr6lQ');
    myHeaders.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jcnhra2Via2xybnJ0dWNtdnV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQ0Nzk0MzgsImV4cCI6MTk3MDA1NTQzOH0.A4erUMLfASeeRNEErvj6DnLuGMuLtFaQPD-xsmbr6lQ');

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    const response = await fetch(API_ENDPOINT.DETAILDESTINASI(id), requestOptions);
    const responseJson = await response.json();
    return responseJson[0];
  }
}

export default BudayakitaDbSource;
