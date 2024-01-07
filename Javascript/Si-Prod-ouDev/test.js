if (process.env.NODE_ENV === 'development') {
    // ...
}

if (process.env.NODE_ENV === 'production') {
    // ...
}

if (['production', 'staging'].includes(process.env.NODE_ENV)) {
    // ...
}