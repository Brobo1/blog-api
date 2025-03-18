import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import passport from "passport";

let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";

passport.use(new JwtStrategy(opts), (err, user) => {});
