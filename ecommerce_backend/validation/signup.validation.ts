
import { z } from "zod";

const UserSchema = z.object({
  email: z.string().nonempty({ message: 'Email is required' }).email({ message: 'Not a valid email' }),
  password: z.string().nonempty({ message: 'Password cannot be empty' }),
  role: z.string()  .default('user'),
  name: z.string().nonempty({ message: 'Name cannot be empty' }),
  address: z.string().optional(),
  phoneno: z.string().refine(value => String(value).length === 10, { message: 'Please enter a 10-digit phone number' }),
  resetPasswordToken: z.string().optional(),
});

export default UserSchema;





/*

-------> errors looks like --------------------------------
{
    "error": {
        "issues": [
            {
                "code": "invalid_type",
                "expected": "string",
                "received": "undefined",
                "path": [
                    "role"
                ],
                "message": "Required"
            },
            {
                "code": "invalid_type",
                "expected": "string",
                "received": "undefined",
                "path": [
                    "address"
                ],
                "message": "Required"
            },
            {
                "code": "invalid_type",
                "expected": "string",
                "received": "number",
                "path": [
                    "phoneno"
                ],
                "message": "Expected string, received number"
            }
        ],
        "name": "ZodError"
    }
} 
*/
