"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "@/app/lib/validation";
import { useRouter } from "next/navigation";
import "@/app/styles/globals.css";

export default function RegisterPage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    const onSubmit = () => {
        router.push("/posts");
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Регистрация</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("user_name")} placeholder="Username" />
                    <p className="error">{errors.user_name?.message}</p>

                    <input {...register("email")} placeholder="Email" />
                    <p className="error">{errors.email?.message}</p>

                    <input {...register("age")} placeholder="Age" />
                    <p className="error">{errors.age?.message}</p>

                    <input type="password" {...register("password")} placeholder="Password" />
                    <p className="error">{errors.password?.message}</p>

                    <input type="password" {...register("confirm_password")} placeholder="Confirm Password" />
                    <p className="error">{errors.confirm_password?.message}</p>

                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
}