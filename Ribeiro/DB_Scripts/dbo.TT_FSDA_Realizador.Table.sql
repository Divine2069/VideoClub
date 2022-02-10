USE [Project_EKP01_TrailerFlix]
GO
/****** Object:  Table [dbo].[TT_FSDA_Realizador]    Script Date: 10/02/2022 11:15:50 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TT_FSDA_Realizador](
	[Id_TT_FSDA_Realizador] [int] IDENTITY(1,1) NOT NULL,
	[Id_Director] [int] NOT NULL,
	[Id_Filme] [int] NULL,
	[Id_Series] [int] NULL,
	[Id_Documentary] [int] NULL,
	[Id_Anime] [int] NULL,
 CONSTRAINT [PK_TT_FSDA_Realizador] PRIMARY KEY CLUSTERED 
(
	[Id_TT_FSDA_Realizador] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TT_FSDA_Realizador]  WITH CHECK ADD  CONSTRAINT [FK_TT_FSDA_Realizador_Anime] FOREIGN KEY([Id_Director])
REFERENCES [dbo].[Anime] ([Id_Anime])
GO
ALTER TABLE [dbo].[TT_FSDA_Realizador] CHECK CONSTRAINT [FK_TT_FSDA_Realizador_Anime]
GO
ALTER TABLE [dbo].[TT_FSDA_Realizador]  WITH CHECK ADD  CONSTRAINT [FK_TT_FSDA_Realizador_Documentary] FOREIGN KEY([Id_Filme])
REFERENCES [dbo].[Documentary] ([Id_Documentary])
GO
ALTER TABLE [dbo].[TT_FSDA_Realizador] CHECK CONSTRAINT [FK_TT_FSDA_Realizador_Documentary]
GO
ALTER TABLE [dbo].[TT_FSDA_Realizador]  WITH CHECK ADD  CONSTRAINT [FK_TT_FSDA_Realizador_Filmes] FOREIGN KEY([Id_TT_FSDA_Realizador])
REFERENCES [dbo].[Filmes] ([Id_Filme])
GO
ALTER TABLE [dbo].[TT_FSDA_Realizador] CHECK CONSTRAINT [FK_TT_FSDA_Realizador_Filmes]
GO
ALTER TABLE [dbo].[TT_FSDA_Realizador]  WITH CHECK ADD  CONSTRAINT [FK_TT_FSDA_Realizador_Realizador] FOREIGN KEY([Id_Filme])
REFERENCES [dbo].[Realizador] ([Id_Director])
GO
ALTER TABLE [dbo].[TT_FSDA_Realizador] CHECK CONSTRAINT [FK_TT_FSDA_Realizador_Realizador]
GO
ALTER TABLE [dbo].[TT_FSDA_Realizador]  WITH CHECK ADD  CONSTRAINT [FK_TT_FSDA_Realizador_Series] FOREIGN KEY([Id_Filme])
REFERENCES [dbo].[Series] ([Id_Serie])
GO
ALTER TABLE [dbo].[TT_FSDA_Realizador] CHECK CONSTRAINT [FK_TT_FSDA_Realizador_Series]
GO
