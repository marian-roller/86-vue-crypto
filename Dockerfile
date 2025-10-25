FROM node:18

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiujemy package.json + package-lock.json
COPY package.json package-lock.json ./

# Instalujemy zależności w katalogu roboczym (czyli w projekcie)
RUN npm install

# Kopiujemy resztę projektu
COPY . .

# Eksponujemy port Vite
EXPOSE 5173

# Domyślna komenda
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "5173"]
