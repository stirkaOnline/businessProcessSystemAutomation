'use client'

import { useState } from 'react'
import { useFormState } from 'react-dom'
import Link from 'next/link'
import { signUp } from '../../../actions/auth'
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Label } from "@/shared/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/ui/card"
import { AlertCircle } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"

const cities = [
  "Москва",
  "Санкт-Петербург",
  "Иркутск",
  "Краснодар",
  "Ростов-на-Дону",
  "Сочи",
  "Ялта",
  "Самара",
  "Аксай",
  "Калининград"
]

export default function SignUpForm() {
  const [state, formAction] = useFormState(signUp, null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (formData: FormData) => {
    setIsSubmitting(true)
    formAction(formData)
    setIsSubmitting(false)
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-200'>
      <Card className="w-[430px]">
        <CardHeader>
          <CardTitle className="text-2xl">Авторизация в системе</CardTitle>
          <CardDescription className='text-primary/50'>создайте новый аккаунт</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Enter your email" required />
                {state?.error?.email && (
                  <p className="text-sm text-red-500 flex items-center mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {state.error.email}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Пароль</Label>
                <Input id="password" name="password" type="password" placeholder="Enter your password" required />
                {state?.error?.password && (
                  <p className="text-sm text-red-500 flex items-center mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {state.error.password}
                  </p>
                )}
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="city">Город</Label>
                <Select name="city" required>
                  <SelectTrigger id="city">
                    <SelectValue placeholder="выберите город" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {state?.error?.city && (
                  <p className="text-sm text-red-500 flex items-center mt-1">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {state.error.city}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button className="w-full bg-blue-700 hover:bg-blue-700/80" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Signing up...' : 'Зарегистрироваться'}
            </Button>
            <div className="text-sm text-center text-primary/50">
              Аккаунт уже существует?{' '}
              <Link href="/signin" className="text-primary hover:underline" aria-label="войдите в свой аккаунт">
                Войти
              </Link>
            </div>
          </CardFooter>
        </form>
        {state?.success && (
          <p className="text-sm text-green-500 text-center mt-2">
            Авторизация прошла успешно! {state.data.city}!
          </p>
        )}
      </Card>
    </div>
  )
}

