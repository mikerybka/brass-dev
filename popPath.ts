
export default function popPath(path) {
    if (typeof path !== 'string') return ''
    
    const parts = path.split('/').filter(Boolean)
    parts.pop()
    return '/' + parts.join('/')
}
