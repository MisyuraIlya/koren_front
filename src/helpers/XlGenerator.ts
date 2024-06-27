import ExcelJS from 'exceljs'


export const XlGenerator = {
    GradesXl(data:IStatistic){
        try {
            const workbook = new ExcelJS.Workbook()
            const worksheet = workbook.addWorksheet('Sheet 1')
            worksheet.addRow(data?.column)
            data?.rows?.map((item) => {
                worksheet.addRow(
                    item?.result?.map((cell) => cell.value)
                )
            })
            workbook.xlsx.writeBuffer().then((buffer) => {
              const blob = new Blob([buffer], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              })
              const url = window.URL.createObjectURL(blob)
              const a = document.createElement('a')
              a.href = url
              a.download = 'document.xlsx'
              a.click()
              window.URL.revokeObjectURL(url)
            })
          } catch (e) {
            console.log('[ERROR]', e)
          }
    },
}