import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6ImFiY2QxZWZnIiwiaWF0IjoxNjI3OTEzNjA4fQ.r1rbfiWxSvqAIaCqCDsd1BQvUItAMoMOv9xKraF_Q4E";

const url = "https://initserver.herokuapp.com/";
const api = axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    Authorization: token,
  },
});

const phoneNumber = "01012341234";
const id = "1fireking5997@gmail.com";
const nickname = "1abcd1efg";
const password = "12345678";
const confirmPassword = "12345678";

//회원가입
const join = async () => {
  const data = await api({
    method: "POST",
    url: "auth/join",
    data: {
      phoneNumber,
      id,
      nickname,
      password,
      confirmPassword,
    },
  });

  console.log(data);
};

//로그인
const login = async () => {
  const data = await api({
    method: "POST",
    url: "auth/login",
    data: { id, password },
  });
  console.log(data);
};

//비밀번호 찾기
const findPassword = async () => {
  const data = await api({
    method: "POST",
    url: "auth/findpassword",
    data: { id },
  });

  console.log(data);
};

const previousPassword =
  "4ea5c508a6566e76240543f8feb06fd457777be39549c4016436afda65d2330e";
const newPassword = "newpassword";

//비밀번호 바꾸기
const changePassword = async () => {
  const data = await api({
    method: "POST",
    url: "auth/changepassword",
    data: { id, previousPassword, newPassword },
  });

  console.log(data);
};

const socialId = "1ewelkafjskl;dfjadksl;";

//소셜로그인
const socialLogin = async () => {
  const data = await api({
    method: "POST",
    url: "auth/sociallogin",
    data: {
      socialId,
    },
  });

  console.log(data);
};

const AsocialId = "asdf3434asdf";
const Aemail = "fireking5997@gmail.com";
const AphoneNumber = "01034352345";
const Anickname = "ab211222d";

//소셜회원가입
const socialJoin = async () => {
  const data = await api({
    method: "POST",
    url: "auth/socialjoin",
    data: {
      socialId: AsocialId,
      email: Aemail,
      phoneNumber: AphoneNumber,
      nickname: Anickname,
    },
  });

  console.log(data);
};

//옵션에 따른 결과 출력
const getDetail = async () => {
  const data = await api({
    method: "POST",
    url: "detail/search",
    data: {
      startDate: "yyyy-mm-dd",
      category: ["C0113"],
      areaCode: [1],
      lat: 37.6382939,
      lng: 127.02189349999998,
      contenttypeid: 25,
    },
  });
  console.log(data);
};

//카테고리별 결과 출력
const getCate = async () => {
  const data = await api({
    method: "GET",
    url: "detail/category?cat2=C0114&lat=37.6383101&lng=127.0218905&areaCode=1,2&contentType=25",
  });
  console.log(data);
};

const contentid = 1915423;
//코스 디테일 결과 출력(옵션에 따른 결과의 컨텐트 아이디를 넣어주면 됩니다.)
const getContentDetail = async () => {
  const data = await api({
    method: "GET",
    url: `detail/${contentid}`,
  });
  console.log(data);
};
