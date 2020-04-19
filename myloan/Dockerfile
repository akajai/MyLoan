FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src
COPY ["myloan/myloan.csproj", "myloan/"]

RUN dotnet restore "myloan/myloan.csproj"
COPY . .
WORKDIR "/src/myloan"
RUN dotnet build "myloan.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "myloan.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "myloan.dll"]