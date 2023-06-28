import { FormikErrors, FormikTouched } from 'formik'
import { parseISO, format } from 'date-fns'
import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'
import { LottieAnimationProps } from '@/@types'

export const hasError = (
  errors: FormikErrors<any>,
  touched: FormikTouched<any>,
  fieldName: string,
): boolean => {
  return Boolean(errors?.[fieldName] && touched?.[fieldName])
}

export const useFormattedDate = (dateString: string) => {
  if (dateString && dateString === '') {
    const date = parseISO(dateString)
    return format(date, 'yyyy-MM-dd HH:mm:ss')
  } else {
    return ''
  }
}

export const LottieAnimation = ({ animationPath }: LottieAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current) {
      lottie.loadAnimation({
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: animationPath,
      })
    }
  }, [animationPath])

  return <div ref={containerRef}></div>
}
