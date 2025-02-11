import { body, validationResult } from 'express-validator';

export const validateOrder = [
  body('userInfo.name').trim().notEmpty(),
  body('userInfo.phone').trim().matches(/^[0-9+\s-]{8,15}$/),
  body('userInfo.address').trim().isLength({ min: 5 }),
  body('items').isArray().notEmpty(),
  body('total').isFloat({ min: 0 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
