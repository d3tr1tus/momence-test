import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.backgroundEnd} 100%
  );
  padding: ${({ theme }) => theme.space.lg};
`;

export const Header = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
`;

export const Field = styled.div`
  margin-bottom: ${({ theme }) => theme.space.lg};
`;

export const PillGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.space.sm};
`;

export const ResultArea = styled.div`
  background: ${({ theme }) => theme.colors.surfaceRecessed};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.xl};
  text-align: center;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.02);
`;

export const ResultValue = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: ${({ theme }) => theme.space.sm};
`;
