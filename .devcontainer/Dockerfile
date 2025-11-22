FROM node:18

# DevContainer working directory
WORKDIR /workspace

# Preinstall Git (Codespaces-ben különösen hasznos)
RUN apt-get update && apt-get install -y git && apt-get clean

CMD [ "bash" ]
