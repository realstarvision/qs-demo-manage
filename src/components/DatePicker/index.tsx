import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { TextField } from '@mui/material'
import './style.scss'
import { styled } from '@mui/material/styles'

const CssTextField = styled(TextField)(() => ({
  '& .MuiOutlinedInput-root': {
    fontSize: '12px',
    fontWeight: 300,
    color: '#FFFFFF',
    height: '26px',
    '& fieldset': {
      border: 'none',
    },
    '& button': {
      '& svg': {
        width: '16px',
        height: '16px',
      },
    },
  },
}))

export default function index({
  open,
  value,
  onChange,
  maxDate,
  minDate,
  className,
  placeholder = '请选择',
  onFocus,
  format = 'yyyy-MM-dd',
}: {
  open?: boolean
  value: Date | null
  onChange: Function
  maxDate?: string | Date
  minDate?: string | Date
  className?: string
  placeholder?: string
  onFocus?: Function
  format?: string
}) {
  // 聚焦时间
  const handleFocus = () => {
    if (onFocus) {
      onFocus()
    }
  }
  const handleDate = (value: Date) => {
    onChange(value)
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
        open={open !== undefined ? open : undefined}
        value={value}
        inputFormat={!value ? placeholder : format}
        onChange={(value) => handleDate(value as Date)}
        renderInput={(params) => (
          <CssTextField size="small" {...params} className={className} onClick={() => handleFocus()} />
        )}
        maxDate={maxDate || undefined}
        minDate={minDate || undefined}
      />
    </LocalizationProvider>
  )
}
