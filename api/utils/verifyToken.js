import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {
  //cookies 에서 access_token 을 가져옴 => req.cookies 로 가져올 수 있음
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "토큰이 존재하지 않음 인증 필요해"));
  }
  //token sign 할때 넣어준 user 정보를 사용해 인증 상태 검증
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) next(createError(403, "토큰이 유효하지 않음"));
    // req.user => req.potato 가능 req. 뒤 이름은 상관없고 그냥 새로운 정보 추가
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "인증되지 않음"));
    }
  });
};

export const verifAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "어드민 아님"));
    }
  });
};
