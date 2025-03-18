import { ExtractJwt, Strategy, StrategyOptions } from "passport-jwt";
import passport from "passport";
import { getUserByIdQuery } from "../src/queries/user";

let opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "secret",
};

passport.use(
  new Strategy(opts, async (payload, done) => {
    try {
      const user = await getUserByIdQuery(payload.id);
      if (user) return done(null, user);
    } catch (error) {
      return done(error);
    }
  }),
);
