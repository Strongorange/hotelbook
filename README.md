express next(err) 미들웨어를 사용하여 에러처리 가능!

# What Remains

Loading 시 Skeleton 이펙트 추가하기
TypeScript Migration

# What I learned

> CSS text-transform

    글자 전체, 혹은 첫 글자를 대,소문자로

> useLocation

    React router dom 에서 현재 url 정보를 가져올 수 있음
    또한 navigate, router 로 라우팅 할때 넘긴 Object 를 가져오고 확인 가능

> Promise.all

    여러개의 Promise 를 동시에 실행하고, 모든 Promise 가 resolve 되면 then 을 실행
    Promise.allSettled 는 모든 Promise 가 resolve 되거나 reject 되면 then 을 실행
    https://ko.javascript.info/promise-api

> Promise.allSettled

    Promise.all 과 비슷하지만, Promise 중 하나라도 Reject 되면 Reject 가 되는 Promise.all 과는 다르게

```javascript
    [
    {status: "fulfilled", value: 1}
    {status: "fulfilled", value: 2}
    {status: "rejected", reason: 에러에러에러}
    ]
```

    의 형식으로 반환됨!

```javascript
const req1 = axios.post("서버주소", { obj1 });
const req2 = axios.post("서버주소", { obj2 });
const req3 = axios.post("서버주소", { obj3 });
const req4 = axios.post("서버주소", { obj4 });
const req5 = axios.post("서버주소", { obj5 });
const postArr = [req1, req2, req3, req4, req5];

Promise.allSettled(postArr)
  .then((result) => {
    // 실패한 것들만 필터링해서 다시 시도
    result.forEach(async (val, index) => {
      if (val.status === "rejected") {
        await postArr[index]; // 실패한 요청 다시 ajax
      }
    });
  })
  .catch((err) => console.log(err));
```

    같이 요청에 실패한 것들만 다시 요청할 수 있음!
